//
//  ViewController.h
//  textFieldDemo
//
//  Created by Joe Puzzo on 2/20/14.
//  Copyright (c) 2014 Joe Puzzo. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController<UITextFieldDelegate>
@property (strong, nonatomic) IBOutlet UILabel *lblOutput;
- (IBAction)goPressed:(id)sender;

/*        Permissions access  Type                 name    */
@property (strong, nonatomic) IBOutlet UITextField *txtInput;
@property (strong, nonatomic) IBOutlet UITextField *txtInput2;
@property (strong, nonatomic) IBOutlet UITextField *txtInput3;
@property (strong, nonatomic) IBOutlet UITextField *txtInput4;

@end
