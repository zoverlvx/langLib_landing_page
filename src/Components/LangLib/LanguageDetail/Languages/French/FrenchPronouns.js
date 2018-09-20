import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const FrenchPronouns = ({language}) => (
	<div className="language_detail">
        <h2 id="margin_top_bottom">{language[0].pronouns.name}</h2>
					<div className="list">
					<ul>
						<li id="col_head">Les pronoms sujets:</li>
						<li id="col_head">singulier</li>
						<li id="col_head">pluriel</li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{language[0].pronouns.sub[0]}</li>
						<li>{language[0].pronouns.sub[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{language[0].pronouns.sub[2]}</li>
						<li>{language[0].pronouns.sub[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{language[0].pronouns.sub[4]}</li>
						<li>{language[0].pronouns.sub[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Les pronoms directs:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{language[0].pronouns.dir[0]}</li>
						<li>{language[0].pronouns.dir[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{language[0].pronouns.dir[2]}</li>
						<li>{language[0].pronouns.dir[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{language[0].pronouns.dir[4]}</li>
						<li>{language[0].pronouns.dir[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Les pronoms indirects:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{language[0].pronouns.indir[0]}</li>
						<li>{language[0].pronouns.indir[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{language[0].pronouns.indir[2]}</li>
						<li>{language[0].pronouns.indir[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{language[0].pronouns.indir[4]}</li>
						<li>{language[0].pronouns.indir[5]}</li>
					</ul>

					<ul>
						<li id="col_head">Les pronoms toniques:</li>
						<li id="col_head"></li>
						<li id="col_head"></li>
					</ul>

					<ul>
						<li>1st:</li>
						<li>{language[0].pronouns.ton[0]}</li>
						<li>{language[0].pronouns.ton[1]}</li>
					</ul>

					<ul>
						<li>2nd:</li>
						<li>{language[0].pronouns.ton[2]}</li>
						<li>{language[0].pronouns.ton[3]}</li>
					</ul>

					<ul>
						<li>3rd:</li>
						<li>{language[0].pronouns.ton[4]}</li>
						<li>{language[0].pronouns.ton[5]}</li>
					</ul>

					</div>

				</div>
);

function mapStateToProps({languages}) {
	return {
		language: languages
	}
}

export default withRouter(connect(mapStateToProps)(FrenchPronouns));
