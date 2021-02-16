import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ControlServiceService } from 'src/app/services/control-service.service';

export interface StateGroup {
  letter: string;
  name: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-artistsearch',
  templateUrl: './artistsearch.component.html',
  styleUrls: ['./artistsearch.component.scss']
})
export class ArtistsearchComponent implements OnInit {

  @Output()
  searchClicked: EventEmitter<any> = new EventEmitter();

  stateForm: FormGroup = this._formBuilder.group({
    country: '',
  });

  stateGroups: StateGroup[];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder, private _controlService: ControlServiceService) { }

  ngOnInit() {
    this._controlService.getCountries().subscribe(data => {
      console.log(data);
      this.stateGroups = data
    });
    this.stateGroupOptions = this.stateForm.get('country')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    this.addEnterKey();
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, name: _filter(group.name, value) }))
        .filter(group => group.name.length > 0);
    }

    return this.stateGroups;
  }
  search() {
    this.searchClicked.emit(this.stateForm.get('country').value);

  }
  addEnterKey() {
    var input = document.getElementById("mycountry");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("mycountry").click();
      }
    });
  }

}
