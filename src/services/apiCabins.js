import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabins could not be loaded", error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteCabins(deleteId) {
  alert(deleteId);
  const response = await supabase.from("cabins").delete().eq("id", deleteId);
  alert(response);
  console.log(response);
}
