import PropTypes from "prop-types";

const PersonCard = ({ bigPerson, imageURL, changePerson }) => {
  const handleClick = () => {
    if (bigPerson !== imageURL.img) {
      changePerson(imageURL.img);
    }
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={imageURL.img} alt="" />
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  bigPerson: PropTypes.string,
  imageURL: PropTypes.object,
  changePerson: PropTypes.func,
};

export default PersonCard;
