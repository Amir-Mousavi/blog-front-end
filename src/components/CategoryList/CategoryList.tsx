import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Progress from "@mui/material/CircularProgress";

import { fetchCategories } from "./redux/categoryReduxAction";

export default function CategoryList() {
  const dispatch = useDispatch();
  const { categories, fetching } = useSelector((state: any) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Stack direction="row" spacing={2}>
      {fetching && <Progress />}
      {!!categories.length &&
        !fetching &&
        categories.map((category: any) => (
          <Chip key={category.id} label={category.name} />
        ))}
    </Stack>
  );
}
