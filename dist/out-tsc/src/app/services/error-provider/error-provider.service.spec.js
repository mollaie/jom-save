import { TestBed } from '@angular/core/testing';
import { ErrorProviderService } from './error-provider.service';
describe('ErrorProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ErrorProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=error-provider.service.spec.js.map