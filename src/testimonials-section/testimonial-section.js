import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { Fragment } from '@wordpress/element';
import { TextControl, PanelBody, SelectControl, NumberControl, MediaPlaceholder, Button, ResponsiveWrapper, URLInputButton } from '@wordpress/components';
import { useBlockProps, MediaUpload , MediaUploadCheck, InspectorControls, PanelColorSettings, withColors, getColorClassName, RichText} from '@wordpress/block-editor';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

registerBlockType( 'wpgb-captain-block/testimonialsingle', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Single Testimonial' ), // Block title.
	icon: 'welcome-add-page', 
	parent: [ 'create-block/testimonialsingle' ], // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'testimonials Section' ),
	],
	attributes: {
		heroTitle: {
			type: 'string',
			default: '',
		},
		heroDes: {
			type: 'string',
			default: '',
		},
		heroCta: {
			type: 'string',
			default: '',
		},
		heroLink: {
			type: 'string',
			default: '',
		},
		heroCtaLink: {
			type: 'string',
			default: '',
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
		},
		themeBackground: {
			type: 'string',
			default: ''
		},
		styleOptions: {
			type: 'string',
			default: 'simple-right-image'
		}
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		const { heroTitle, heroDes, heroCta, styleOptions,themeBackground} = attributes;
		

		const removeMedia = () => {
			props.setAttributes({
				mediaId: 0,
				mediaUrl: ''
			});
		}
	 
		 const onSelectMedia = (media) => {
			props.setAttributes({
				mediaId: media.id,
				mediaUrl: media.url
			});
		}
		
		return (
			<div { ...useBlockProps()}  >
				<div className="Hero-outtertest">
                        <RichText
							placeholder="Add Testimonials Title Here"
							value={ heroTitle }
                            tagName="h2"
							onChange={(newval) => setAttributes({ heroTitle: newval })}
						/>
						<RichText
							placeholder="Add Testimonials Here"
							value={ heroDes }
                            tagName="p"
							onChange={(newval) => setAttributes({ heroDes: newval })}
						/>
						<RichText
							placeholder="Add Testimonials Cite/Name"
							value={ heroCta }
                            tagName="h5"
							onChange={(newval) => setAttributes({ heroCta: newval })}
						/>
						<MediaUploadCheck>
						<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
									onSelect={onSelectMedia}
									value={attributes.mediaId}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Choose an image')}
										
											<img src={attributes.mediaUrl} />
										
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Replace image')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>{__('Remove image')}</Button>
								</MediaUploadCheck>
							}
						</div>
						</MediaUploadCheck>
					</div>
				</div>
		);
	},
	save: ( props ) => {
        const blockProps = useBlockProps.save();
        const { attributes, setAttributes } = props;
		const { heroTitle, heroDes, heroCta} = attributes;
        return (
            <div className="testimonials-2">
                <div className="testimonials-txt-1">
                    <RichText.Content { ...blockProps } tagName="h2" className='' value={ heroTitle } />
                    <RichText.Content { ...blockProps } tagName="p" className='' value={ heroDes } />
                    <RichText.Content { ...blockProps } tagName="cite" className='' value={ heroCta } />
                </div>
                
                {attributes.mediaId != 0 && 
					<div className="testimonials-img-1">
                        <img src={attributes.mediaUrl} alt={ heroTitle } />
					</div>
                }
            </div>
        );
	},
} );