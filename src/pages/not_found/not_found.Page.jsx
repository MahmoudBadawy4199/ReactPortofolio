import notFoundImg from '../../assets/notFound.svg';
const NotFoundPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <h1>Not Found</h1>
    <img src={notFoundImg} alt="404 Image" />
   </div>
  )
}

export default NotFoundPage