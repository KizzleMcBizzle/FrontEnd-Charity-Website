import { Link } from 'react-router-dom';

const TeachingList = ({ teachings }) => {
  
    return (
      <div className="teaching-list">
          {teachings.map(teaching => (
              <div className="links" key={teaching.id}>
                    <Link to={`/donor/teaching/${teaching.id}`}>
                        <h2>{ teaching.title }</h2>
                     </Link>
              </div>
          ))}
      </div>
    );
}
   
  export default TeachingList;