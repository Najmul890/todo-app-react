/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context";
import Swal from "sweetalert2";

const TodoModal = () => {
  const {
    dispatch,
    showTodoModal,
    setShowTodoModal,
    todoAdd,
    setTodoAdd,
    selectedTodoToEdit,
    setSelectedTodoToEdit,
    setSearchParams,
    setPriorityFilterValue,
    setStatusFilterValue,
  } = useContext(TodoContext);

  const [initialFormValues, setInitialFormValues] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const initialFormErrors = {
    title: null,
    description: null,
    priority: null,
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // if the modal open for edit a todo then the initial form values is updated with selected todo info which will need to update
  useEffect(() => {
    if (selectedTodoToEdit) {
      setInitialFormValues({
        title: selectedTodoToEdit.title,
        description: selectedTodoToEdit.description,
        priority: selectedTodoToEdit.priority,
      });
    }
  }, [selectedTodoToEdit]);

  // setting form values if initial form values update
  useEffect(() => {
    setFormValues(initialFormValues);
  }, [initialFormValues]);

// here setting form errors and form values while onchange a field and update the states with their specific name field
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    
    // here setting form errors for specific field if field value is empty
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

    // if no form errors then perform add or edit a todo
    if (Object.keys(errors).length === 0) {
      dispatch({
        type: todoAdd ? "ADD_TODO" : "EDIT_TODO",
        payload: todoAdd
          ? todoInfo
          : {
              ...todoInfo,
              id: selectedTodoToEdit.id,
              status: selectedTodoToEdit.status,
            },
      });
      setFormValues({
        title: "",
        description: "",
        priority: "",
      });
      setShowTodoModal(false);
      setSelectedTodoToEdit(null);
      setFormErrors(initialFormErrors);
      setTodoAdd(true);
      setSearchParams("");
      setPriorityFilterValue("");
      setStatusFilterValue("");

      {/* showing success alert after add or edit a todo */}
      Swal.fire({
        position: "center",
        icon: "success",
        title: todoAdd
          ? "Your Todo has created successfully!"
          : "Todo has updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // if a user close the modal instead perform add or edit a todo handleModalClose function close the modal set other states with their initial value
  const handleModalClose = () => {
    setShowTodoModal(false);
    setFormErrors(initialFormErrors);
    setTodoAdd(true);
    setSelectedTodoToEdit(null);
  };
  return (
    <div
      className={`bg-white ${
        showTodoModal ? " flex justify-center items-center " : "hidden"
      } bg-opacity-70 min-h-screen py-0 2md:py-10 w-full z-20 absolute top-0 left-0 max-md:px-4 lg:text-lg`}
    >
      <form
        onSubmit={handleFormSubmit}
        className=" w-full 2md:w-1/2 bg-white shadow-lg rounded-lg p-5 "
      >
        <h2 className="mb-5 text-center text-2xl font-bold text-primary lg:mb-11 lg:text-[28px]">
          {todoAdd ? "Add New Todo" : "Edit This Todo"}
        </h2>
        <div className="mt-3 text-lg font-medium text-primary ">
          <label className="" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleFieldChange}
            value={formValues?.title}
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
            value={formValues?.priority}
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
            value={formValues?.description}
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
            {todoAdd ? "Add Todo" : "Edit Todo"}
          </button>

          <div
            onClick={handleModalClose}
            className="btn bg-danger hover:bg-danger text-white "
          >
            Cancel
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoModal;
