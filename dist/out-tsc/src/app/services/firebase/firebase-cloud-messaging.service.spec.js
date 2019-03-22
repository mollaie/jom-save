import { TestBed } from '@angular/core/testing';
import { FirebaseCloudMessagingService } from './firebase-cloud-messaging.service';
describe('FirebaseCloudMessagingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FirebaseCloudMessagingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firebase-cloud-messaging.service.spec.js.map