import {PrimeReactContext} from 'primereact/api';
import {Button} from 'primereact/button';
import {InputSwitch} from 'primereact/inputswitch';
import {RadioButton} from 'primereact/radiobutton';
import {Sidebar} from 'primereact/sidebar';
import {classNames} from 'primereact/utils';
import React, {useContext, useEffect, useState} from 'react';
import {LayoutContext} from './context/layoutcontext';
import AppConfigButton from "@/Components/AppConfigButton.jsx";

const AppConfig = (props) => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const {layoutConfig, setLayoutConfig, layoutState, setLayoutState} = useContext(LayoutContext);
    const {setRipple, changeTheme} = useContext(PrimeReactContext);

    const onConfigButtonClick = () => {
        setLayoutState((prevState) => ({...prevState, configSidebarVisible: true}));
    };

    const onConfigSidebarHide = () => {
        setLayoutState((prevState) => ({...prevState, configSidebarVisible: false}));
    };

    const changeInputStyle = (e) => {
        setLayoutConfig((prevState) => ({...prevState, inputStyle: e.value}));
    };

    const changeRipple = (e) => {
        setRipple(e.value);
        setLayoutConfig((prevState) => ({...prevState, ripple: e.value}));
    };

    const changeMenuMode = (e) => {
        setLayoutConfig((prevState) => ({...prevState, menuMode: e.value}));
    };

    const _changeTheme = (theme, colorScheme) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState) => ({...prevState, theme, colorScheme}));
        });
    };

    const decrementScale = () => {
        setLayoutConfig((prevState) => ({...prevState, scale: prevState.scale - 1}));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState) => ({...prevState, scale: prevState.scale + 1}));
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };

    useEffect(() => {
        applyScale();
    }, [layoutConfig.scale]);

    return (
        <>

            <button className="layout-config-button config-link" type="button" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>


            <Sidebar visible={layoutState.configSidebarVisible} onHide={onConfigSidebarHide} position="right"
                     className="layout-config-sidebar w-20rem">
                {!props.simple && (
                    <>
                        <h5>Scale</h5>
                        <div className="flex align-items-center">
                            <Button icon="pi pi-minus" type="button" onClick={decrementScale} rounded text
                                    className="w-2rem h-2rem mr-2" disabled={layoutConfig.scale === scales[0]}></Button>
                            <div className="flex gap-2 align-items-center">
                                {scales.map((item) => {
                                    return <i className={classNames('pi pi-circle-fill', {
                                        'text-primary-500': item === layoutConfig.scale,
                                        'text-300': item !== layoutConfig.scale
                                    })} key={item}></i>;
                                })}
                            </div>
                            <Button icon="pi pi-plus" type="button" onClick={incrementScale} rounded text
                                    className="w-2rem h-2rem ml-2"
                                    disabled={layoutConfig.scale === scales[scales.length - 1]}></Button>
                        </div>

                        <h5>Menu Type</h5>
                        <div className="flex">
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'static'}
                                             checked={layoutConfig.menuMode === 'static'}
                                             onChange={(e) => changeMenuMode(e)} inputId="mode1"></RadioButton>
                                <label htmlFor="mode1">Static</label>
                            </div>
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'overlay'}
                                             checked={layoutConfig.menuMode === 'overlay'}
                                             onChange={(e) => changeMenuMode(e)} inputId="mode2"></RadioButton>
                                <label htmlFor="mode2">Overlay</label>
                            </div>
                        </div>

                        <h5>Input Style</h5>
                        <div className="flex">
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="inputStyle" value={'outlined'}
                                             checked={layoutConfig.inputStyle === 'outlined'}
                                             onChange={(e) => changeInputStyle(e)}
                                             inputId="outlined_input"></RadioButton>
                                <label htmlFor="outlined_input">Outlined</label>
                            </div>
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="inputStyle" value={'filled'}
                                             checked={layoutConfig.inputStyle === 'filled'}
                                             onChange={(e) => changeInputStyle(e)} inputId="filled_input"></RadioButton>
                                <label htmlFor="filled_input">Filled</label>
                            </div>
                        </div>

                        <h5>Ripple Effect</h5>
                        <InputSwitch checked={layoutConfig.ripple} onChange={(e) => changeRipple(e)}></InputSwitch>
                    </>
                )}

                <h5>Tailwind</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/tailwind-light.png"
                                     imgAlt="Tailwind Light"
                                     onClick={() => _changeTheme('tailwind-light', 'light')}/>
                </div>

                <h5>PrimeOne Design - 2022</h5>
                <div className="grid">
                    
                    <AppConfigButton img="/images/layout/themes/lara-light-blue.png"
                                     imgAlt="Lara Light Blue"
                                     onClick={() => _changeTheme('lara-light-blue', 'light')}/>
                    
                </div>

            </Sidebar>
        </>
    );
};

export default AppConfig;
