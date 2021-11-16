import React from "react";

class Card extends React.Component {
    render() {
        const { name, username, email, id } = this.props;
        return (
            <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='test' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{username}</p>
                </div>
            </div>
        );
    }
}
//Always export so you can access
export default Card;