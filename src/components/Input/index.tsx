import { TextField, TextFieldProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form';

type IProps = TextFieldProps & {
    name: string;
    label: string;
    type?: string;
}

export default function Input({ name, label, type, ...rest }: IProps) {
    const {
        register,
        control,
        formState: {
            errors
        }
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...rest}
                    {...field}
                    name={name}
                    label={label}
                    type={type}
                    error={!!errors[name]?.message}
                    helperText={errors[name]?.message}
                    {...register(name)}
                />
            )}
        />
    )
}
