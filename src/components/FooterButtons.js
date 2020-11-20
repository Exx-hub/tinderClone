import React from "react";
import "../styles/FooterButtons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

function FooterButtons() {
	return (
		<div className="footerButtons">
			<IconButton className="footerButtons__iconButtons">
				<ReplayIcon className="footerButtons__replay" />
			</IconButton>
			<IconButton className="footerButtons__iconButtons">
				<ClearIcon className="footerButtons__clear" />
			</IconButton>
			<IconButton className="footerButtons__iconButtons">
				<StarIcon className="footerButtons__star" />
			</IconButton>
			<IconButton className="footerButtons__iconButtons">
				<FavoriteIcon className="footerButtons__heart" />
			</IconButton>
			<IconButton className="footerButtons__iconButtons">
				<FlashOnIcon className="footerButtons__lightning" />
			</IconButton>
		</div>
	);
}

export default FooterButtons;
