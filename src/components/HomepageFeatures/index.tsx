import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Track LLM Usage & Costs',
    Svg: require('@site/static/img/llm.svg').default,
    description: (
      <>
        Elsai ARMS lets you monitor token usage and compute costs per run, project, and model — helping you stay on top of your LLM budgets.
      </>
    ),
  },
  {
    title: 'Log What Matters',
    Svg: require('@site/static/img/logs.svg').default,
    description: (
      <>
        Record success rates, execution time, and logs across all agent runs. Automatically store and retrieve project metrics from cloud.
      </>
    ),
  },
  {
    title: 'Built for Integration',
    Svg: require('@site/static/img/integration.svg').default,
    description: (
      <>
        Easily plug into your code. Integrate seamlessly with your workflows. Start tracking metrics with just a few lines of code.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
