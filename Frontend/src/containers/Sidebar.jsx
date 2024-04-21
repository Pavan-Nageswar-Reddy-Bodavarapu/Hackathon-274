import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    const [macroDropdownOpen, setMacroDropdownOpen] = useState(false)

    const toggleMacroDropdown = () => {
        setMacroDropdownOpen(!macroDropdownOpen)
    }

    return (
        <div className="sidebar">
            <div className="macro-dropdown">
                <div
                    className={`macro-header ${
                        macroDropdownOpen ? 'open' : ''
                    }`}
                    onClick={toggleMacroDropdown}
                >
                    <i className="fas fa-arrow-down"></i>
                    <span>Macroeconomic (USD)</span>
                </div>
                {macroDropdownOpen && (
                    <div className="checkboxes">
                        <Link to="/graph">
                            <label>
                                <input type="checkbox" />
                                GDP Growth Rage	
                            </label>
                        </Link>
                        <Link to ="/macrogdpgrowthrange">
                        <label>
                            
                            <input type="checkbox" />
                            GDP Current USD	
                        </label>

                        </Link>

                        <Link to="/CurrentAccountBalance">
                        <label>
                            <input type="checkbox" />
                            Current Account Balance (% of GDP)	
                        </label>

                        </Link>
                        <Link to='/FDIBOI'>
                        <label>
                            <input type="checkbox"/>
                            Foreign direct investment, net (BoP, current US$)	
                        </label>

                        </Link>
                        <label>
                            <input type="checkbox"/>
                            Foreign direct investment, net outflows (BoP, current US$) 	
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Foreign direct investment, net inflows (% of GDP)	             
                        </label>
                        <Link to="/chatllm">
                        <label>
                            Chat APP
                        </label>
                        </Link>
                        
                    
                    </div>
                )}
                        <div
                    className={`macro-header ${
                        macroDropdownOpen ? 'open' : ''
                    }`}
                    onClick={toggleMacroDropdown}
                >
                    <i className="fas fa-arrow-down"></i>
                    <span>Agricultural Table</span>
                </div>
                {macroDropdownOpen && (
                    <div className="checkboxes">
                        <Link to="/graph">
                            <label>
                                <input type="checkbox" />
                                Indicator	
                            </label>
                        </Link>
                        <label>
                            <input type="checkbox" />
                            Agricultural Contribution (% GDP)	
                        </label>
                        <label>
                            <input type="checkbox" />
                            Manufacturing(%GDP)	
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Agriculture, forestry, and fishing, value added (annual % growth)	
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Fertilizer consumption (kilograms per hectare of arable land)	                        </label>
                        <label>
                            <input type="checkbox"/>
                            Fertilizer consumption (% of fertilizer production)	                        </label>

                    </div>
                )}
                <div
                    className={`macro-header ${
                        macroDropdownOpen ? 'open' : ''
                    }`}
                    onClick={toggleMacroDropdown}
                >
                    <i className="fas fa-arrow-down"></i>
                    <span>Macroeconomic (USD)</span>
                </div>
                {macroDropdownOpen && (
                    <div className="checkboxes">
                        <Link to="/graph">
                            <label>
                                <input type="checkbox" />
                                GDP (USD)
                            </label>
                        </Link>
                        <label>
                            <input type="checkbox" />
                            FDI Inflows (USD)
                        </label>
                        <label>
                            <input type="checkbox" />
                            FDI Outflows (USD)
                        </label>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Sidebar
