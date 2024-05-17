import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/avinash-kondaveti-bb453b231">
				<BsLinkedin />
			</a>
			<a href="https://github.com/AvinashRonaldo">
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
