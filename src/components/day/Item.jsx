import { useStore } from "../../data/store";
import { useState } from "react";
const Item = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text || "");
  let itemClass = "";
  if (item.done) itemClass += "done";
  if (item.late) itemClass += "due";
  const removeTodo = useStore((state) => state.removeTodo);
  const updateTodo = useStore((state) => state.updateTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);

  const handleToggle = () => {
    toggleTodo(item.id);
  };

  const handeleEditingClick = () => {
    setIsEditing(true);
  };
  const handleDeleteClick = () => {
    removeTodo(item.id);
  };
  const handleSaveClick = () => {
    updateTodo(item.id, editText);
    setIsEditing(false);
  };
  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div data-cy="item" className="item">
      <div>
        <input
          data-cy="toggle-input"
          type="checkbox"
          checked={item.done}
          onChange={handleToggle}
        />
        {!isEditing ? (
          <label className={itemClass}>{item.text}</label>
        ) : (
          <input
            type="text"
            value={editText}
            data-cy="input-change"
            onChange={handleEditChange}
          />
        )}
        {/* <span title="Snooza">💤</span> */}
      </div>
      <div>
        {!isEditing ? (
          <span
            className="change"
            title="Ändra"
            data-cy="change"
            onClick={handeleEditingClick}>
            ✍️
          </span>
        ) : (
          <span data-cy="save" onClick={handleSaveClick}>
            💾
          </span>
        )}
        <span onClick={handleDeleteClick} data-cy="delete" title="Ta bort">
          🗑️
        </span>
      </div>
    </div>
  );
};

export default Item;
