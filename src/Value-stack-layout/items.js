import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Button } from '@wordpress/components';
import { useBlockProps, RichText, MediaUpload , MediaUploadCheck,} from '@wordpress/block-editor';


registerBlockType( 'wpgb-captain-block/valuesingle', {
	title: __( 'Value Single Section' ),
	icon: 'welcome-add-page', 
	parent: [ 'create-block/valuesingle' ],
	category: 'design',
	supports: {
        color: true
    },
	attributes: {
        Value: {
			type: 'string',
			selector: 'h3',
			default: '',
		},
		ValueContent: {
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

    },
    keywords: [
		__( 'Value Single Item' ),
	],
	edit: ( props ) => {
        const { attributes, setAttributes } = props;
		const { Value, ValueContent, mediaId, mediaUrl} = attributes;
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
			<div className={ props.className }>	
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
                <RichText
                    placeholder="Value Stack Layout Title"
                    tagName="h3" 
                    value={ Value }
                    onChange={(newval) => setAttributes({ Value: newval })}
                />
                <RichText
                    placeholder="Value Stack Layout Content"
                    tagName="p" 
                    value={ ValueContent }
                    onChange={(newval) => setAttributes({ ValueContent: newval })}
                />
            </div>
		);
	},
	save: ( props ) => {
		const { attributes } = props;
		const { Value, ValueContent} = attributes;
		const blockProps = useBlockProps.save();
		return (
			<div className='Value-holder-text'>
				{attributes.mediaId != 0 && 
					<img src={attributes.mediaUrl} alt={ Value } />
				}
				<RichText.Content { ...blockProps } tagName="h3" className='' value={ Value } />
				<RichText.Content { ...blockProps } tagName="p" className='' value={ ValueContent } />
			</div>
		);
	},
} );