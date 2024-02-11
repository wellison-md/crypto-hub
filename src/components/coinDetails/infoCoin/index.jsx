import PropTypes from 'prop-types';

import { limitText } from './infoCoinHelpers';
import { CoinBio, CoinLink, CoinLinks } from './infoCoinStyle';

export default function InfoCoin(props) {
  const { description, links } = props;
  const { en: bio } = description;

  return (
    <>
      <CoinBio>{ limitText(bio) }</CoinBio>
        <CoinLinks>
          <CoinLink
            href={ links?.homepage[0] ?? '#' }
            target="_blank"
            rel="noreferrer"
          >
            Página Oficial
          </CoinLink>

          <CoinLink
            href={ links?.official_forum_url[0] ?? '#' }
            target="_blank"
            rel="noreferrer"
          >
            Fórum
          </CoinLink>

          <CoinLink
            href={ links?.subreddit_url ?? '#' }
            target="_blank"
            rel="noreferrer"
          >
            Reddit
          </CoinLink>

          <CoinLink
            href={ links?.repos_url.github[0] ?? '#' }
            target="_blank"
            rel="noreferrer"
          >
            Github
          </CoinLink>
        </CoinLinks>
    </>
  );
}

InfoCoin.propTypes = {
  description: PropTypes.shape({
    en: PropTypes.string,
  }),
  links: PropTypes.shape({
    homepage: PropTypes.arrayOf(PropTypes.string),
    official_forum_url: PropTypes.arrayOf(PropTypes.string),
    subreddit_url: PropTypes.string,
    repos_url: PropTypes.shape({
      github: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
}

InfoCoin.defaultProps = {
  description: { en: '' },
  links: {
    homepage: [],
    official_forum_url: [],
    subreddit_url: '',
    repos_url: { github: [] },
  },
}
