import React from 'react'
import { Link } from "react-router-dom"

function Home(props) {
    return (
        <div className="uk-height-1-1 uk-section uk-section-small uk-flex uk-flex-middle uk-text-center">
            <div className="uk-width-1-1">
                <div className="uk-container">

                    <h1 className="uk-heading-primary">Moravian Lives</h1>


                    <div className='uk-margin-large-left uk-margin-large-right uk-margin-medium-top uk-margin-medium-bottom'>
                        <p className='.uk-text-break'>
                            The Moravian Church, known in Germany as the Brüdergemeine, Brüder-Unität, or Herrnhuter, claims its pre-reformation origins in the present-day Czech Republic. It was “renewed” in the early eighteenth century by Count Nikolaus Ludwig von Zinzendorf (1700-1760) when groups of peasants, artisans, and craftsmen, mostly Protestant, flocked to the nobleman’s estates in Berthelsdorf, Saxony, seeking a different kind of spiritual life. As the congregations grew, these men and women from all social classes lived together in congregation settlements like Herrnhut and Herrnhaag, which were designed to foster individual spirituality and communal faith. As these settlements grew, mission congregations were set up in the Caribbean, Greenland, South Africa, North America and elsewhere. One of the consequences of this world-wide Moravian mission was that men and women, from the 18th century to today, could find themselves transported from one side of the world to the other within the space of only a few months or years. The mobility of the Moravians is remarkable.
                        </p>
                        <p className='.uk-text-break'>
                            From the middle of the eighteenth century on, each member of the worldwide Moravian congregation has been invited to write a memoir that should serve as a farewell to the congregation and that was often read at his or her funeral. The primary purpose of this memoir was to articulate and preserve the ”inner journey;” that is,  the person’s path from a state of ignorance of grace to his or her rebirth in Christ. Besides being read at the funeral, these Lebensläufe were disseminated to Moravian congregations around the world, where they were read by and to other Moravians to serve as a means of edification. The memoirs of leading figures and paradigmatic Moravians (whether man or woman, Count or artisan, European or African), became very popular within the Moravian worldwide congregation and were printed in the Gemeinnachrichten. The memoirs also played a central role for the Moravian Congregation as they portrayed the ”inner journey” of its members, which in turn constituted the very core of the ”inner church”. Constituting a “universal history of the church,” as originally envisaged by Zinzendorf, this extraordinary custom has also created a vast database of nearly 65,000 records of all men and women who wrote or dictated a memoir.
                        </p>
                        <p className='.uk-text-break'>
                            This site provides access to those memoirs that have been transcribed as part of the international research collaborative, “Moravian Lives”. On this site, the writings of men and women from the Moravian Archives in Bethlehem, Pennsylvania and London, UK, are made available.
                        </p>
                    </div>

                    <Link className='uk-button uk-button-default uk-button-large' to='/map'> EXPLORE </Link>
                </div>
            </div>
        </div>
    )
}

export default Home