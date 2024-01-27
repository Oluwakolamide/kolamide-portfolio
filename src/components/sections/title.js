const Title = ({ sn, title }) => {
  return (
    <div>
      <span>{sn}.</span>
      <h2>{title}</h2>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Title;
