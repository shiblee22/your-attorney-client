import React from 'react';
import TeamCard from '../TeamCard/TeamCard';

const Team = () => {
    const team = [
        {
            id: 1,
            name: "Saul Goodman",
            expertise: "Criminal Law",
            imgUrl: "https://i.ibb.co/7pJyqv3/saul-goodman.jpg"
        },
        {
            id: 2,
            name: "Kim Wexler",
            expertise: "Tax Law",
            imgUrl: "https://i.ibb.co/MgrXNRt/kim-wexler.jpg"
        },
        {
            id: 3,
            name: "Walter White",
            expertise: "Business Law",
            imgUrl: "https://i.ibb.co/72fgFsh/walter-white.jpg"
        },
        {
            id: 4,
            name: "Skyler White",
            expertise: "Family Law",
            imgUrl: "https://i.ibb.co/6gc6vf7/skyler-white.jpg"
        }
    ]
    return (
        <div className="bg-light py-5">
            <div className="container">
                <h3 className="text-center color-background">Meet Our Experts</h3>
                <div className="row mt-5">
                    {
                        team.map( tm => <TeamCard key={tm.id} member={tm} ></TeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;