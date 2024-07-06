import CategoryForm from "src/configs/templates/CategoryForm";
import CategoryList from "src/configs/templates/CategoryList";



function AdminPage() {
  return(
   <div>
<CategoryList />
    <CategoryForm/>
   </div>
  );
}
  

export default AdminPage