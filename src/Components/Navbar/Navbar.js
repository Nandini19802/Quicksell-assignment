import React, {useState} from 'react'
import filterIcon from '../../Assets/Images/Tuning.svg'
import downIcon from '../../Assets/Images/Down.svg'

import './Navbar.css'

export default function Navbar(props) {
    const [toggleFilter, settoggleFilter] = useState(false);

    function handleDisplayToggle(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleGroupValue(e.target.value);
        }
    }
    function handleOrderingValue(e){
        settoggleFilter(!toggleFilter);
        if(e.target.value !== undefined){
            props.handleOrderValue(e.target.value);
        }
    }
    
  return (
    <>
        <section className="navigatorBar">
            <div className="navigatorBar_organizer">
                <div>
                    <div className="navigatorBar-disp-btn" onClick={handleDisplayToggle}>
                        <div className="navigatorBar-disp-icon navigatorBar-disp-filter">
                            <img src={filterIcon} alt="icon" />
                        </div>
                        <div className="navigatorBar-disp-heading">
                            Display
                        </div>
                        <div className="navigatorBar-disp-icon navigatorBar-disp-drop">
                            <img src={downIcon} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "navigatorBar-disp-dropdown navigatorBar-disp-dropdown-show" : "navigatorBar-disp-dropdown"}>
                        <div className="navigatorBar-disp-filters">
                            <div className="navigatorBar-dropdown-category">
                                Grouping
                            </div>
                            <div className="navigatorBar-dropdown-selector">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='navigatorBar-selector' name="grouping" id="">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="navigatorBar-disp-filters">
                            <div className="navigatorBar-dropdown-category">
                                Ordering
                            </div>
                            <div className="navigatorBar-dropdown-selector">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='navigatorBar-selector' name="grouping" id="">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
