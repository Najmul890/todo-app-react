import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context";

/* eslint-disable react/prop-types */
const AddOrEditModal = ({ selectedTodoToEdit }) => {
  const { dispatch, todoAdd, setTodoAdd, setSelectedTodoToEdit } =
    useContext(TodoContext);

  const initialFormValues = {
    title: selectedTodoToEdit ? selectedTodoToEdit.title : "",
    description: selectedTodoToEdit ? selectedTodoToEdit.description : "",
    priority: selectedTodoToEdit ? selectedTodoToEdit.priority : "",
  };

  

  // useEffect(()=>{
  //   setFormValues({
  //     ...formValues,
  //     title: selectedTodoToEdit ? selectedTodoToEdit.title : "",
  //   description: selectedTodoToEdit ? selectedTodoToEdit.description : "",
  //   priority: selectedTodoToEdit ? selectedTodoToEdit.priority : "",
  //   })
  // },[selectedTodoToEdit])

  console.log(selectedTodoToEdit);

  const initialFormErrors = {
    title: null,
    description: null,
    priority: null,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    for (const field in formValues) {
      if (formValues[field]?.trim() === "") {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }

    setFormErrors(errors);

    const todoInfo = {
      title: formValues.title,
      description: formValues.description,
      priority: formValues.priority,
    };
console.log(todoAdd);
    if (Object.keys(errors).length === 0) {
      dispatch({
        type: todoAdd ? "ADD_TODO" : "EDIT_TODO",
        payload: todoAdd
          ? todoInfo
          : {
              ...todoInfo,
              id: selectedTodoToEdit.id,
              isFavorite: selectedTodoToEdit.isFavorite,
            },
      });

      setSelectedTodoToEdit(null);
      setFormValues(initialFormValues);
      setTodoAdd(true);
    }
  };

  const handleModalClose = () => {
    setFormErrors(initialFormErrors);
    setTodoAdd(true);
    setSelectedTodoToEdit(null);
  };
  return (
    <dialog id={`add-edit-modal-${selectedTodoToEdit?.id}`} className="modal">
      <div className="modal-box">
        <form onSubmit={handleFormSubmit} className="">
          <h2 className="mb-5 text-center text-2xl font-bold text-primary lg:mb-11 lg:text-[28px]">
            {todoAdd ? "Add New Task" : "Edit This Task"}
          </h2>
          <div className="mt-3 text-lg font-medium text-primary ">
            <label className="" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleFieldChange}
              value={selectedTodoToEdit?.title}
              placeholder="Enter Title"
              className="input mt-3 w-full text-primary focus:outline-none border border-primary"
            />
          </div>
          <div className="my-2">
            {formErrors.title && (
              <p className="text-red-600">{formErrors.title}</p>
            )}
          </div>
          <div className="mt-3 text-lg font-medium text-primary ">
            <label className="" htmlFor="description">
              Priority
            </label>
            <select
              onChange={handleFieldChange}
              name="priority"
              value={selectedTodoToEdit?.priority}
              className="select mt-3 text-primary focus:outline-none border border-primary w-full "
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="my-2">
            {formErrors.priority && (
              <p className="text-red-600">{formErrors.priority}</p>
            )}
          </div>
          <div className="mt-3 text-lg font-medium text-primary ">
            <label className="" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={handleFieldChange}
              name="description"
              value={selectedTodoToEdit?.description}
              placeholder="Enter Description"
              className="textarea mt-3 text-primary focus:outline-none border border-primary textarea-lg w-full"
            ></textarea>
          </div>
          <div className="my-2">
            {formErrors.description && (
              <p className="text-red-600">{formErrors.description}</p>
            )}
          </div>
          <div className="flex mt-5 items-center justify-between ">
            <button
              type="submit"
              className="btn bg-primary hover:bg-primary text-white "
            >
              Add Todo
            </button>

            <div className="">
              <form method="dialog">
                <button
                  onClick={handleModalClose}
                  className="btn bg-danger hover:bg-danger text-white "
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddOrEditModal;
