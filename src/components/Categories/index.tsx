import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/AddBox';

import { SubCategories } from "../SubCategories";
import Input from "../Input";

export function Categories({ control }) {
    const { fields, append, remove } = useFieldArray({
        name: "categories",
        control,
    });

    return (
        <>
            <Grid
                container
                direction="row"
            >
                {fields.length > 0 &&
                    fields.map((item, index) => {
                        return (
                            <Grid container
                                alignItems="center"
                            >
                                <Typography
                                    variant="h6"
                                    color="primary"
                                >
                                    Category
                                </Typography>
                                <Grid
                                    item
                                    key={item.id}
                                    xs={12}
                                >
                                    <Input
                                        name={`categories[${index}].title`}
                                        label="Title"
                                        fullWidth
                                        sx={{
                                            marginBottom: ".5rem"
                                        }}
                                    />
                                </Grid>
                                <SubCategories
                                    nestIndex={index}
                                    {...{ control }}
                                />
                                <Grid item    >
                                    <IconButton
                                        disableRipple
                                        color="error"
                                        onClick={() => remove(index)}
                                    >
                                        <DeleteIcon /> Delete Category
                                    </IconButton>
                                </Grid>
                            </Grid>
                        );
                    })}
            </Grid>

            <IconButton
                color="primary"
                disableRipple
                sx={{
                    marginTop: "1rem",
                }}
                onClick={() => {
                    append({ name: "append" });
                }}
            >
                <AddIcon /> Add Category
            </IconButton>

            <Divider />
        </>
    );
}
