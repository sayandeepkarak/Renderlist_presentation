import * as Yup from "yup";

export const CreateFormSchema = Yup.object({
  playlistName: Yup.string().min(3).required("Please enter playlist name"),
});

export const AddUrlSchema = Yup.object({
  url: Yup.string()
    .required("Please Enter Video url")
    .matches(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watchv=|v=|v=)([^#]*).*/,
      "Please enter a correct youtube video url"
    ),
});
