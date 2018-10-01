import React, {Component} from 'react'
import Map from "../Map";


export default class Individual extends Component {
    render() {
        return (
            <div className='uk-section uk-section-small'>
                <div className='uk-container'>
                    <div className='uk-text-center'>
                        <h2> Igor Stravinsky </h2>
                        <img src='https://s26643.pcdn.co/wp-content/uploads/2016/08/1082051250.jpg' alt='portrait' />
                        <p> something something </p>
                    </div>
                    <ul className="uk-subnav uk-subnav-pill" data-uk-switcher="animation: uk-animation-fade">
                        <li><a href="#">Memoir</a></li>
                        <li><a href="#">Movement</a></li>
                        <li><a href="#">Connection</a></li>
                    </ul>

                    <ul className="uk-switcher uk-margin">
                        <li>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Integer vitae justo eget magna fermentum iaculis. Risus pretium quam vulputate dignissim suspendisse in. In cursus turpis massa tincidunt. Leo in vitae turpis massa sed elementum tempus. Ut porttitor leo a diam. Pellentesque habitant morbi tristique senectus et netus. Aliquam id diam maecenas ultricies mi. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. </p>

                             <p>   Purus non enim praesent elementum facilisis. Pellentesque habitant morbi tristique senectus et netus. Tellus orci ac auctor augue mauris augue neque gravida in. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Cras fermentum odio eu feugiat pretium nibh ipsum. Lectus magna fringilla urna porttitor rhoncus. Fermentum iaculis eu non diam. Fringilla urna porttitor rhoncus dolor purus non. Vivamus arcu felis bibendum ut tristique. Orci dapibus ultrices in iaculis nunc sed. Id eu nisl nunc mi ipsum faucibus vitae. Tortor consequat id porta nibh venenatis cras sed felis. </p>

                              <p>  Vitae elementum curabitur vitae nunc sed velit. Diam vel quam elementum pulvinar etiam non quam lacus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Facilisis gravida neque convallis a cras semper. Mauris pharetra et ultrices neque ornare. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Tempor id eu nisl nunc mi ipsum faucibus vitae. In ante metus dictum at tempor commodo. Fringilla urna porttitor rhoncus dolor. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. </p>

                        </li>
                        <li>
                            <Map/>
                        </li>
                        <li>Bazinga!</li>
                    </ul>
                </div>
            </div>
        )
    }
}