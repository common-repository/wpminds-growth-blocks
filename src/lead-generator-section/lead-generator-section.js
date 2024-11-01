import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpgb-captain-block/lead-block-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Lead Generator Section' ), // Block title.
	icon: 'superhero', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Lead Generator Section' ),
	],
	attributes: {
		heroTitle: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet',
		},
		heroDes: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		heroCta: {
			type: 'string',
			default: '',
		},
		themeBackground: {
			type: 'string',
			default: 'theme-section-full alignfull Transpante-themeBackground'
		},
		boxStyle:{
			type: 'string',
			default: '',
		}
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { heroTitle, heroDes, heroCta, themeBackground, boxStyle} = attributes;
	
		return (
			<div { ...useBlockProps()}  >
				<InspectorControls >
					<PanelBody>
						<SelectControl
							label="Theme Background"
							value= { themeBackground }
							onChange={(newval) => setAttributes({ themeBackground: newval })}
							options={ [
								{ label: 'Transparent', value: 'theme-section-full alignfull Transpante-themeBackground' },
								{ label: 'Active Theme Background', value: 'theme-section-full alignfull full-bg-color' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<SelectControl
							label="Style Option"
							value= { boxStyle }
							onChange={(newval) => setAttributes({ boxStyle: newval })}
							options={ [
								{ label: 'Simple', value: 'wpwpmindsfr-l-Simple' },
								{ label: 'Box Style', value: 'wpwpmindsfr-l-Box' },
								{ label: 'Two Col', value: 'wpwpmindsfr-l-Two' },
							] }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody>
						<TextControl
							label="Add Section Title Here"
							value={ heroTitle }
							onChange={(newval) => setAttributes({ heroTitle: newval })}
						/>
						<TextControl
							label="Add Section Title Caption Here"
							value={ heroDes }
							onChange={(newval) => setAttributes({ heroDes: newval })}
						/>
						<TextControl
							label="Add Form ShortCode"
                            help= "Create Form and add shortcode of form here."
							value={ heroCta }
							onChange={(newval) => setAttributes({ heroCta: newval })}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="Hero-outter">
					<div className="Hero-1section">
						<div className="col-100">
							<div className="col-inner-100">
                                <p>{ heroDes }</p>
								<h2>{ heroTitle }</h2>
								<div className="form-lead-section">
                                    {heroCta}
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
	save : (props) => { 
		const { attributes } = props;
		const { heroTitle, heroDes, heroCta, themeBackground, boxStyle} = attributes;

    	return (
			<div className={themeBackground}>
				<div className={boxStyle}>
				<div className="Hero-outter">
					<div className="Hero-1section">
						<div className="col-100">
							<div className="col-inner-100">
								<div className="form-lead-section-content">
									<p>{ heroDes }</p>
									<h2>{ heroTitle }</h2>
								</div>
								<div className="form-lead-section">
                                    {heroCta}
                                </div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	},
} );