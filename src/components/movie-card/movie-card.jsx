import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {card} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={card.imgSrc} alt={card.imgAlt} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{card.linkText}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  card: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;
