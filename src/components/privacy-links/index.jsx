import React from "react";
import Link from "next/link";

const PrivacyLinks = () => {
	return (
		<p>
			<Link href="/privacy/jp">
				<a style={{ margin: "0 5px" }} title="日本語版">
					日本語
				</a>
			</Link>
			・
			<Link href="/privacy/en">
				<a style={{ margin: "0 5px" }} title="English version">
					English
				</a>
			</Link>
			・
			<Link href="/privacy/mn">
				<a style={{ margin: "0 5px" }} title="Монгол хувилбар">
					Монгол
				</a>
			</Link>
		</p>
	);
};

export default PrivacyLinks;
