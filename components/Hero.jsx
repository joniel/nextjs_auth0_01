import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h2 className="mb-4" data-testid="hero-title">
      주의 말씀은 내발의 등이 빛이 나이다.
    </h2>
    <p className="lead" data-testid="hero-lead">
      주님의 연애편지가 많은 사람들의 손에 들려 읽혀지기를... 예수님의 이름올 기도드립니다. 아멘
    </p>
  </div>
);

export default Hero;
