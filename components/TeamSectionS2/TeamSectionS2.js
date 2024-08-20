import React from "react";
import Team from '../../api/teams'
import TeamCard from "../TeamSection/TeamCard";
import Link from "next/link";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const TeamSectionS2 = (props) => {
    return (
        <section className="helpass-team-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>- our volunteers -</span>
                            <h2>Meet Our Dedicated Team of Volunteers.</h2>
                            <Link href="https://wa.me/+233572755340" className="theme-btn">Join Us</Link>
                        </div>
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        {Team.slice(0, 9).map((team, Titem) => (
                            <div className=" col-lg-3 col-md-6 col-12" key={Titem}>
                                <TeamCard className='h-[200px]' Ttitle={team.title} Timg={team.img} Tsubtitle={team.subtitle} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    );
}

export default TeamSectionS2;
