# 制作背景

### 人物一覧取得の処理
#### Controllerの実装
```Laravel
namespace App\Http\Controllers;
use App\Models\Person
use Exception
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class PersonController extends Controller
{
    /**
     * 人物の全件取得
     * @return AnonymousResourceCollection
     */
     public function fetch():AnonymousResourceCollection
     {
         $id = Auth:id();
         if(!$id)
         {
             throw nex Exception('未ログインです');
         }
         
         try
         {
             $persons = Person:where('user_id', $id)->get();
         }
         catch(Exception $e)
         {
             throw $e;
         }
         
         return PersonResource::collection($persons);
     }
}

```
#### API Resourceの実装
```Laravel
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
     public function toArray($request)
     {
         return
         [
             'id' => $this->id,
             'name' => $this->name,
             'birthday' => $this->birthday,
             'relationship' => $this->relationship,
             'icon' => $this->icon,
             'gender' => $this->gender,
         ];
     }
}

```
#### FeatureTestの実装
```Laravel
class PersonTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
     public function 一覧を取得()
     {
         $persons = Parson::factory()->count(10)->create();
         
         $response = $this->getJson('api/parsons');
         
         $response
             ->assertOK()
             ->assertJsonCount($persons->count());
     }
}
```

### 人物登録の処理
#### Controllerの実装
```Laravel
class PersonController extends Controller
{
　　　    /**
     * 人物の登録
     * @param PersonPostRequest $request
     * @return JsonResponse
     */
     public function create(PersonPostRequest $request): JsonResponse
     {
         try
         {
             $person = new Person();
             $person->user_id = Auth::id();
             $person->name = $request->name;
             $person->birthday = $request->birthda;
             $person->relationship = $request->relationship;
             $person->icon = $request->icon;
             $person->gender = $request->gender;
             $person->save();
         }
         catch(Exception $e)
         {
             throw: $e;
         }
         
         return response()->json([
             'message' => '登録が完了しました。'
         ], 201);
     }
}
```

#### FeatureTestの実装
```Laravel
class PersonTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
     public function 登録処理()
     {
     　　　　　　　　$data = [
             user_id => '99',
             name => '太郎',
             birthday => '20221003',
             relationship => '子供',
             icon => 'noIcon',
             gender => '男性',
         ]
         
         $response = $this->postJson('api/parsons', $data);
         $response
             ->assertCreated()
             ->assertJsonFragment($data);
             
     }
}
```

### 人物更新の処理
#### Controllerの実装
```Laravel
class PersonController extends Controller
{
　　　    /**
     * 人物の更新
     * @param PersonPatchRequest $request
     * @param \App\Models\Person $request
     * @return JsonResponse
     */
     public function update(PersonPatchRequest $request, Parson $parson): JsonResponse
     {
         try
         {
             $person->fill($requesst->all()) ;
             $person->update();
         }
         catch(Exception $e)
         {
             throw: $e;
         }
         
         return response()->json([
             'message' => '更新が完了しました。'
         ], 201);
     }
}
```

#### FeatureTestの実装
```Laravel
class PersonTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
     public function 更新処理()
     {
     　　　　　　　　$parson = Parson::factory()->create();
         
         $parson->name = '盛岡';
         
         $response = $this->patchJson('api/parsons/{$parson->id}', $parson->toArray());
         $response
             ->assertOk()
             ->assertJsonFragment($parson->toArray());
             
     }
}
```

### 人物削除の処理
#### Controllerの実装
```Laravel
class PersonController extends Controller
{
　　　    /**
     * 人物の削除
     * @param \App\Models\Person $request
     * @return JsonResponse
     */
     public function destroy(Parson $parson): JsonResponse
     {
         try
         {
             $person->delete();
         }
         catch(Exception $e)
         {
             throw: $e;
         }
         
         return response()->json([
             'message' => '削除が完了しました。'
         ], 201);
     }
}
```

#### FeatureTestの実装
```Laravel
class PersonTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
     public function 削除処理()
     {
     　　　　　　　　$parson = Parson::factory()->count(10)->create();
         
         $response = $this->deleteJson('api/parsons/1');
         $response->assertOk();
             
         $response = $this->getJson('api/parsons');
         $response->assertJsonCount($tasks->count() -1);
             
     }
}
```
