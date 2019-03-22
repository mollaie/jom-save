import { TestBed } from '@angular/core/testing';
import { DataTransactionService } from './data-transaction.service';
describe('DataTransactionService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataTransactionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-transaction.service.spec.js.map