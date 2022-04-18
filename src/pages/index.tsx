import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../components/Input";

import * as yup from "yup";
import { Categories } from "../components/Categories";

interface IFormData {
    name: string;
    email: string;
    password: string;
}

const formValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    password: yup.string().required("Password is required")
});

export default function Home() {

    const methods = useForm<IFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        resolver: yupResolver(formValidationSchema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {/* Controlled input */}
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    sx={{
                        marginBottom: ".5rem"
                    }}
                />
                <Input
                    name="email"
                    label="Email"
                    type="text"
                    fullWidth
                    sx={{
                        marginBottom: ".5rem"
                    }}
                />
                <>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...methods.register('password')}
                        style={{
                            marginBottom: ".5rem",
                            width: "95.6%",
                            height: "2.5rem",
                            padding: "0 .5rem",
                        }}
                    />
                    {methods.formState.errors.password
                        && <p>{methods.formState.errors.password?.message}</p>}
                </>
                <Categories
                    control={methods.control}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Submit
                </Button>
            </form>
            <pre>
                {JSON.stringify(methods.getValues(), null, 2)}
            </pre>
        </FormProvider>
    )
}
