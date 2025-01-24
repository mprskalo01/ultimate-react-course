import Button from './Button';

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with friendName</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>😊 Your expense</label>
      <input type="text" />
      <label>👨🏽‍🤝‍👨🏻 Friend's expense</label>
      <input type="text" disabled />
      <label>💶 Who is paying the bill?</label>
      <select value="you">
        <option value="you">You</option>
        <option value="friend">friendName</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
