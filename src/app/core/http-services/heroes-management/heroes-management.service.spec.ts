import { TestBed } from '@angular/core/testing';

import { HeroesManagementService } from './heroes-management.service';
import { Hero } from '../../models/hero.model';

describe('HeroesManagementService', () => {
  let service: HeroesManagementService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesManagementService);
  });


  it("Heroes Management Service should be created", () => {
    
    expect(service)
    .toBeTruthy();

  });


  it("Get heroes list",(done) => {

    service.getHeroesList().subscribe((res:Hero[]) => {
      expect(res)
      .toEqual(service.heroes);
      done();
    })

  })


  it("Get Top Heroes",(done) => {
    
    /*
      With no parameters
    */

    service.getTopHeroes().subscribe((res:Hero[]) => {
      expect(res.length)
      .toBe(service.heroes.length)
      done();
    })


    /*
      With parameters
    */
   
    service.getTopHeroes(4).subscribe((res:Hero[]) => {
      expect(res.length)
      .toBe(4);
      done();
    })

    
    /*
      With parameters greater than the size of list
    */

    service.getTopHeroes(service.heroes.length+1).subscribe((res:Hero[]) => {
      expect(res.length)
      .toBe(service.heroes.length);
      done();
    })

  })

  
  it("Add new Hero",() => {

    let old_length:number = service.heroes.length;
    let newHero:Hero = new Hero();
    newHero.name = "Bob Martin";
    newHero.score = 1000;

    service.addNewHero(newHero)

    expect(service.heroes.length)
    .toBe(old_length+1);

  })


  it("Edit Hero",() => {

    let originalHero:Hero = service.heroes[0];
    let modifiedHero:Hero = originalHero
        
    modifiedHero.name = "No Name";
    modifiedHero.score = 0;

    service.editHero(modifiedHero);

    let heroTest:Hero = service.heroes.find((item:Hero) => 
      item.id == originalHero.id
    )

    expect(heroTest)
    .toEqual(modifiedHero)

  })


  it("Delete Hero",() => {

    let id:number = 1;
    let originalLength:number = service.heroes.length;
    

    service.deleteHeroByID(id);
    expect(service.heroes.length)
    .toBe(originalLength-1)


    /*
      ID not found case
     */
    originalLength=service.heroes.length
    service.deleteHeroByID(service.heroes.length+5)
    
    expect(service.heroes.length)
    .toBe(originalLength)
    

  })


});
