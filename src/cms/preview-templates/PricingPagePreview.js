/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreivew = ({ entry, getAsset }) => {
    const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
    const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

    return (
        <PricingPageTemplate
            image={entry.getIn(['data', 'image'])}
            title={entry.getIn(['data', 'title'])}
            pricing={{
                heading: entry.getIn(['data', 'pricing', 'heading']),
                description: entry.getIn(['data', 'pricing', 'description']),
                plans: pricingPlans,
            }}
        />
    )
};

PricingPagePreivew.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default PricingPagePreivew;
