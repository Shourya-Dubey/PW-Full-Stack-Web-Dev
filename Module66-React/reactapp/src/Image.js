function Image(props) {
  return (
    <div className="img-box">
      <img src={props.src} />
    </div>
  );
}

export default Image;