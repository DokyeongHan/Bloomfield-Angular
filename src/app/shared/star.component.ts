import { EventEmitter, Component, Input, OnChanges, Output} from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class starComponent implements OnChanges{
    ngOnChanges(): void {
        this.starWidth = this.ratin * 75 / 5;
    }

    @Input() ratin: number;
    starWidth: number;
    @Output() notifya: EventEmitter<string> = new EventEmitter<string>();

    onClick(){
        this.notifya.emit('clicked!');
    }
}