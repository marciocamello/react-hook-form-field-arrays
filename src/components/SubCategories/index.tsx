import { Divider, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/AddBox';
import { useFieldArray } from "react-hook-form";

import Input from "../Input";

export function SubCategories({ nestIndex, control }) {
    const { fields, remove, insert } = useFieldArray({
        control,
        name: `categories[${nestIndex}].subCategories`
    });

    return (
        <Grid
            container
            direction="column"
        >
            {fields.length > 0 &&
                <>
                    <Typography
                        variant="h6"
                        color="primary"
                    >
                        SubCategories
                    </Typography>
                    {fields.map((item, k) => {
                        return (
                            <Grid
                                container
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    key={item.id}
                                    xs={11}
                                >
                                    <Input
                                        name={`categories[${nestIndex}].subCategories[${k}].name`}
                                        label="Name"
                                        fullWidth
                                        sx={{
                                            marginBottom: ".5rem"
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={1}   >
                                    <IconButton
                                        disableRipple
                                        color="error"
                                        onClick={() => remove(k)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        );
                    })}
                </>
            }

            <IconButton
                color="primary"
                disableRipple
                onClick={() =>
                    insert(nestIndex + 1, {
                        name: ""
                    })
                }
            >
                <AddIcon /> Add Subcategory
            </IconButton>

            <Divider />
        </Grid>
    );
};
