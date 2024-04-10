import pageNotFoundImg from '../images/404-icon.png';

function PageNotFound() {
  return (
    <div className='page-not-found-container'>
      <img src={pageNotFoundImg} alt='404 error icon' />
      <p>Oops! Meal not found. Let's stir up something fresh.🍳</p>
    </div>
  );
}

export default PageNotFound;
