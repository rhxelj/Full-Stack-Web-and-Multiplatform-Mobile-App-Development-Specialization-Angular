import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { Leaders } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }
  // By rhxlej
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(Leaders);
  }

}
