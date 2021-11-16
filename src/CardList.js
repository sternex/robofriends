import React, { Fragment } from "react";
import Card from "./Card";

class CardList extends React.Component {
    render() {
        const { robots } = this.props;

        return <Fragment>
            {
                robots.map((item, index) =>
                    <Card key={index}
                        id={item.id}
                        name={item.name}
                        username={item.username}
                        email={item.email} />)
            }
        </Fragment>
    }
}

export default CardList;