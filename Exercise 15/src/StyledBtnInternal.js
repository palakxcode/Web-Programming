// StyledButtonInternal.js
const StyledButtonInternal = () => (
  <div>
    <style>
      {`
        .internal-btn {
          background-color: green;
          color: white;
          padding: 10px;
          font-size: 16px;
        }
      `}
    </style>
    <button className="internal-btn">Internal CSS Button</button>
  </div>
);

export default StyledButtonInternal;
