import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { PrimaryInput } from "../../atoms/input/PrimaryInput";
import { PrimaryLabel } from "../../atoms/label/PrimaryLabel";

export const RegisterForm = () => {
    return (
<>
    <form className="max-w-lg border rounded-lg mx-auto">
        <div className="flex flex-col gap-4 p-4 md:p-8">
            <PrimaryLabel
                htmlFor={"name"}
            >
                Name
            </PrimaryLabel>
            <PrimaryInput
                name={"name"}
                type={"text"}
                placeholder="名前を入力してください"
                width={"w-full"}
                margin={"mb-4"}
            />

            <PrimaryLabel
                htmlFor={"email"}
            >
                Email
            </PrimaryLabel>
            <PrimaryInput
                name={"email"}
                type={"email"}
                placeholder="メールアドレスを入力してください"
                width={"w-full"}
                margin={"mb-4"}
            />

            <PrimaryLabel
                htmlFor={"password"}
            >
                Password
            </PrimaryLabel>
            <PrimaryInput
                name={"password"}
                type={"password"}
                placeholder="パスワードを入力してください"
                width={"w-full"}
                margin={"mb-4"}
            />

            <PrimaryLabel
                htmlFor={"confirm_password"}
            >
                Password
            </PrimaryLabel>
            <PrimaryInput
                name={"confirm_password"}
                type={"password"}
                placeholder="再度パスワードを入力してください"
                width={"w-full"}
                margin={"mb-8"}
            />

            <PrimaryButton
                background={"bg-red-800 hover:bg-red-700 active:bg-red-600"}
                color={"text-white"}
            >
                Register
            </PrimaryButton>
        </div>
    </form>
        </>
    );
};
