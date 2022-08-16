import React from 'react';
import EntryButton from "../components/UI/buttons/EntryButton/EntryButton";
import ChangeThemeButton from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton";

const EntryPage = () => {
    return (
        <div>
            <div className={'entry-container'}>
                <div className={'buttons-input-container'}>
                    <EntryButton>Sign In</EntryButton>
                    <EntryButton>Sign Up</EntryButton>
                </div>
                <ChangeThemeButton>Change Theme</ChangeThemeButton>
            </div>
            <footer className={'author'}>made by @hannakot62</footer>

        </div>
    );
};

export default EntryPage;
