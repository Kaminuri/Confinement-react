import { withRouter } from 'react-router-dom'
const BoutonDeNavigation = ({ history }) => (
  <button type="button" onClick={() => history.push('/ma-nouvelle-url')}>Changer de page</button>
);
BoutonDeNavigation.propTypes = {
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }),
};
export default withRouter(BoutonDeNavigation);