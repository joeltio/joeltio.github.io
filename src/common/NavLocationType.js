import PropTypes from "prop-types";

const NavLocationType = PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    component: PropTypes.elementType,
});

export default NavLocationType;